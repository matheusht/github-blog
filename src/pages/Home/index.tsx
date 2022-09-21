import { Card } from "../../components/Card";
import { SearchBox } from "../../components/SearchBox";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Card />
            <SearchBox />
        </HomeContainer>
    )
}