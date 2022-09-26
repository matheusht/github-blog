import { Card } from "./components/Card";
import { IssuePanel } from "./components/IssuePanel";
import { SearchBox } from "./components/SearchBox";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Card />
            <SearchBox />
            <IssuePanel />
        </HomeContainer>
    )
}