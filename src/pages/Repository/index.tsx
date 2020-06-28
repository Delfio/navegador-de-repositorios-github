import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Container, Headers, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch();
    const [repositorio, setRepositorio] = useState<RepositoryParams>();

    useEffect(() => {
        console.log('sadf');
    }, []);

    return (
        <>
            <Headers>
                <img src={logo} alt="Github Explore" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Headers>

            <RepositoryInfo>
                <header>
                    <img
                        src="https://avatars2.githubusercontent.com/u/42546922?s=460&u=7e7ee3bc668ac96dab3ed6f5653ff1940413cc7b&v=4"
                        alt="profile-avatar"
                    />
                    <div>
                        <strong>Delfio/backend_go_barber</strong>
                        <p>descricao do repo</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>strars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>
            <Issues>
                <Link to="/ss">
                    <div>
                        <strong>sdf</strong>
                        <p>sdf</p>
                    </div>

                    <FiChevronRight size={20} color="#cbcbd6" />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
