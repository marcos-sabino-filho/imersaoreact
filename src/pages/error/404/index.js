import React from 'react'
import { Link } from 'react-router-dom';

import MasterPage from '../../../components/MasterPage';

import { BackgroundWrapper, ContainerMessage, DescriptionError, DescriptionMessage, Button } from './style';

const Page404 = () => (
    <MasterPage>
        <BackgroundWrapper>
            <ContainerMessage>
                <DescriptionError>Oops!!</DescriptionError>
                <DescriptionMessage>
                    Não conseguimos encontrar a página que você estava procurando. :(
                </DescriptionMessage>
                <Button as={Link} to={'/'}>Voltar para home</Button>
            </ContainerMessage>
        </BackgroundWrapper>
    </MasterPage>
);

export default Page404;