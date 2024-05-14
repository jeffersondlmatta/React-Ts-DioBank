import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfoConta from "../components/CardInfoConta"
import { useEffect, useState } from "react"
import { api } from "../api"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
}

const  Conta = () => {
    const [ userData, setUserData] = useState<null | UserData >()

    useEffect(() => {
        const getData = async () => {
        const data: any | UserData = await api 
        setUserData(data)   
        }

        getData()
    }, [])

    const actualData = new Date()
    console.log(actualData)
    return(
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size='xl' color="black" />
                        </Center>
                    ):
                    (
                        <>
                        <CardInfoConta mainContent={`Bem Vindo ${userData?.name}`} 
                        content={`${actualData.getDay()} /${actualData.getMonth() +1} / ${actualData.getFullYear()} 
                        ${actualData.getHours()}: ${actualData.getMinutes()}
                        `}/>

                        <CardInfoConta mainContent='Saldo'content={`R$ ${userData.balance}`} />

                        </>
                    )
                }
                       

            </SimpleGrid>
        </Center>
    )
}

export default Conta