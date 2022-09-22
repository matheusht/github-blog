import { IssueItem } from "./IssueItem";
import { IssuePanelContainer } from "./styles";


export function IssuePanel() {
    return (
        <IssuePanelContainer>
            <IssueItem />
            <IssueItem />
            <IssueItem />
            <IssueItem />
        </IssuePanelContainer>
    )
}