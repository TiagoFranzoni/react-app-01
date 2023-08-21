import { Article } from "../Article/Article";

// Simulação da resposta do servidor
const ARTICULES = [
    {
        title: "Titulo da postagem do Blog",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum est urna, sed luctus orci malesuada in. Cras non mattis ipsum. Donec non enim ut augue consectetur sodales in in magna. Vestibulum quis rutrum dui. Aliquam eleifend vel ex ac sagittis. Praesent vel viverra nulla. Morbi convallis nec erat quis."
    },
    {
        title: "Titulo da postagem do Blog",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum est urna, sed luctus orci malesuada in. Cras non mattis ipsum. Donec non enim ut augue consectetur sodales in in magna. Vestibulum quis rutrum dui. Aliquam eleifend vel ex ac sagittis. Praesent vel viverra nulla. Morbi convallis nec erat quis."
    },
    {
        title: "Titulo da postagem do Blog",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum est urna, sed luctus orci malesuada in. Cras non mattis ipsum. Donec non enim ut augue consectetur sodales in in magna. Vestibulum quis rutrum dui. Aliquam eleifend vel ex ac sagittis. Praesent vel viverra nulla. Morbi convallis nec erat quis."
    }
]


export function ArticleList() {
    return (
        <div className="article-list">
            {ARTICULES.map((item, index) => (
                <Article
                    key={index}
                    title={item.title}
                    description={item.description}
                />
            ))}        
        </div>
    );
}


