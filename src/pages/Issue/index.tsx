import { IssueHeader } from "./components/IssueHeader";
import { ArticleBody, IssueContainer, Variable } from "./styles";


export function Issue() {
    return (
        <IssueContainer>
            <IssueHeader />
            <ArticleBody>
                <p><strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>

                <p>
                    <a>Dynamic typing</a> <br />
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                </p>


                <article>
                    <div>
                        <Variable color="blue-300">let</Variable> foo = <Variable color="green-400">42</Variable>;   <Variable color="gray-600">// foo is now a number </Variable><br />
                    </div>
                    <div>
                        foo = <Variable color="green-400">‘bar’</Variable>;    <Variable color="gray-600">// foo is now a string</Variable> <br />
                    </div>
                    <div>
                        foo = <Variable color="green-400">true</Variable>;     <Variable color="gray-600">// foo is now a boolean</Variable> <br />
                    </div>
                </article>

            </ArticleBody>
        </IssueContainer >
    )
}