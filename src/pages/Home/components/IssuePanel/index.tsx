import { IssueItem } from "./IssueItem";
import { IssuePanelContainer } from "./styles";


export function IssuePanel() {
    return (
        <IssuePanelContainer>
            <a href="/issue">
                <IssueItem />
            </a>
            <IssueItem />
            <IssueItem />
            <IssueItem />
            <IssueItem />
            <IssueItem />
        </IssuePanelContainer>
    )
}