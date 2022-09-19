import { GithubLogo, Users, Buildings } from "phosphor-react";
import { CardContainer } from "./styles";

export function Card() {
    return (
        <CardContainer>
            <img src="https://github.com/caiotheodoro.png" />
            <div>
                <strong>Caio Theodoro</strong>
                <p>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </p>
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
            </div>
        </CardContainer>
    )
}