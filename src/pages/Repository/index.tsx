/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Container, Headers, RepositoryInfo, Issues } from './styles';
import api from '../../service/api';

interface RepositoryParams {
    full_name: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    title: string;
    id: number;
    html_url: string;
    user: {
        login: string;
    };
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    const [repositorio, setRepositorio] = useState<Repository | null>(null);
    const [issuesRepo, setIssues] = useState<Issue[]>([]);

    console.log(params);

    useEffect(() => {
        LoadDataForRepository();
    }, [params.full_name]);

    async function LoadDataForRepository(): Promise<void> {
        const [repository, issues] = await Promise.all([
            api.get<Repository>(`repos/${params.full_name}`),
            api.get<Issue[]>(`repos/${params.full_name}/issues`),
        ]);

        setRepositorio(repository.data);
        setIssues(issues.data);
    }
    return (
        <>
            <Headers>
                <img src={logo} alt="Github Explore" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Headers>
            {repositorio && (
                <RepositoryInfo>
                    <header>
                        <img
                            src={repositorio.owner.avatar_url}
                            alt={repositorio.owner.login}
                        />
                        <div>
                            <strong>{repositorio.full_name}</strong>
                            <p>{repositorio.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repositorio.stargazers_count}</strong>
                            <span>strars</span>
                        </li>
                        <li>
                            <strong>{repositorio.forks_count}</strong>
                            <span>forks</span>
                        </li>
                        <li>
                            <strong>{repositorio.open_issues_count}</strong>
                            <span>issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}
            {issuesRepo.map((issue) => (
                <Issues key={issue.id}>
                    <a href={issue.html_url} target="blank">
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>

                        <FiChevronRight size={20} color="#cbcbd6" />
                    </a>
                </Issues>
            ))}
        </>
    );
};

export default Repository;
