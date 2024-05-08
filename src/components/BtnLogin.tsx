import { Button } from '@chakra-ui/react'
interface Ibtn {
    onClick: () => void
}

export const BtnLogin = ({onClick}: Ibtn) => {
    return (
        <Button
        onClick={onClick}
        colorScheme='teal'
        size='sm'
        width='100px'    
        marginTop='5px'
        
        >
        Entrar
        </Button>
    )
}

export default BtnLogin