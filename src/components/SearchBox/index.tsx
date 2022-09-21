import { SearchBoxContainer } from "./styles";

export function SearchBox() {
    return (
        <SearchBoxContainer>
            <div>
                <h3>Publicações</h3>
                <span>6 publicações</span>
            </div>
            <input type="text" placeholder="Buscar conteúdo" />
        </SearchBoxContainer>
    )
}