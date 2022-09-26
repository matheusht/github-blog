import { GithubLogo, Users, Buildings, CaretLeft, ArrowSquareOut } from "phosphor-react";
import { ActionContainer, BodyContainer, CardContainer } from "./styles";

export function IssueHeader() {
    return (
        <CardContainer>
            <ActionContainer>
                <div>
                    <CaretLeft size={14} weight="bold" />
                    <p>VOLTAR</p>
                </div>
                <div>
                    <p>VER NO GITHUB</p>
                    <ArrowSquareOut size={14} weight="bold" />
                </div>
            </ActionContainer>
            <BodyContainer>
                <strong>JavaScript data types and data structures</strong>
                <span>
                    <a>
                        <GithubLogo size={16} weight="fill" />
                        caiotheodoro
                    </a>
                    <a>
                        <Buildings size={16} weight="fill" />
                        mb.labs
                    </a>
                    <a>
                        <Users size={16} weight="fill" />
                        32 seguidores
                    </a>
                </span>
            </BodyContainer>
        </CardContainer>
    )
}