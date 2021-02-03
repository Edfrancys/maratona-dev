import React, { ReactNode, useContext, createContext, useState, useEffect } from 'react';
import { auth, db, firebase } from '../Firebase';
import { useRouter } from 'next/router';

import { AuthContextData } from '../interfaces/AuthContext'

type Props = {
    children?: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }: Props) => {

    const Router = useRouter()

    const [user, setUser] = useState<object | null>(null)
    const [load, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const loadStorageData = () => {
            const storageUser = localStorage.getItem('@VJAuth:user')
            if (storageUser) {
                setUser(JSON.parse(storageUser))
                setLoading(true)
            } else {
                setLoading(true)
            }
        }
        loadStorageData()
    }, [])

    async function signInGoogle() {
        const googleProvider = new firebase.auth.GoogleAuthProvider()
        return auth.signInWithPopup(googleProvider)
            .then(mapUserGoogle)
            .catch(e => {
                console.log(e)
            })
    }

    async function mapUserGoogle(data: any) {
        const { displayName, email, photoURL, uid } = data.user
        const objUser = { name: displayName, email, avatar: photoURL, uid }

        const getUserBD = await db.collection('app_users')
            .doc(uid).get()

        const { Cf }: any = getUserBD

        Cf === false ?

            db.collection('app_users')
                .doc(uid)
                .set(objUser).then(() => {
                    console.log(Cf)
                    setUser(objUser)
                    localStorage.setItem('@VJAuth:user', JSON.stringify(objUser))
                    Router.push('/index')
                })

            :

            setUser(objUser)
        localStorage.setItem('@VJAuth:user', JSON.stringify(objUser))
        Router.push('/index')

    }

    async function signIn(data: any): Promise<void> {
        return auth.signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                console.log(res)
                getAditionalUserAuth(res)
            })
    }

    async function getAditionalUserAuth({ user }: any) {
        return db
            .collection('app_users')
            .doc(user.uid)
            .get()
            .then((userData) => {
                const getData: any = userData.data()
                setUser(getData)
                console.log(getData)
                localStorage.setItem('@VJAuth:user', JSON.stringify(getData))
                Router.push('/index')
            })
    }


    async function signUp({ name, email, password }: any): Promise<void> {
        auth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                auth.currentUser?.sendEmailVerification()
                const userAuthUid = response.user?.uid
                console.log('User Cadastrado')
                return createUser({ uid: userAuthUid, email, name })
            })
    }

    const createUser = ({ uid, email, name }: any) => {
        const dataUser: any = {
            name,
            email,
            avatar: null,
            uid
        }
        return db.collection('app_users')
            .doc(uid)
            .set(dataUser)
            .then(() => {
                setUser(dataUser)
                console.log(dataUser)
                return dataUser
            })
    }

    function signOut() {
        return auth.signOut().then(() => {
            setUser(null)
            localStorage.clear()
        })
    }

    return (
        <AuthContext.Provider value={
            { signed: !!user, user, signIn, signUp, signOut, load, signInGoogle }
        } >
            {children}
        </ AuthContext.Provider>
    )

}

export const useAuth = () => {
    const contextAuth = useContext(AuthContext)
    const { signed, user, setUser, signIn, signInGoogle, signUp, signOut, load }: any = contextAuth
    return { user, setUser, signed, signIn, signInGoogle, signUp, signOut, load }
}