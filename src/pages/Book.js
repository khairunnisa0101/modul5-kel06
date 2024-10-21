import { Fragment } from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Book.css";

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const poster = [
        {
            title: "To Kill a Mockingbird", id: 1,
            rate: 4,
            genre: "fiction, classic",
            img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
        },
        {
            title: "1984", id: 2,
            rate: 4,
            genre: "dystopian, fiction",
            img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/1984first.jpg",
        },
        {
            title: "Pride and Prejudice", id: 3,
            rate: 4,
            genre: "romance, classic",
            img: "https://upload.wikimedia.org/wikipedia/commons/1/17/PrideAndPrejudiceTitlePage.jpg",
        },
    ];
    
    const data = [
        {
            title: "The Great Gatsby", id: 1,
            rate: 4,
            genre: "fiction, classic",
            img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
        },
        {
            title: "Moby-Dick", id: 2,
            rate: 4,
            genre: "adventure, fiction",
            img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Moby-Dick_FE_title_page.jpg",
        },
        {
            title: "The Catcher in the Rye", id: 3,
            rate: 4,
            genre: "fiction, coming-of-age",
            img: "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
        },
        {
            title: "Lord of the Flies", id: 4,
            rate: 4,
            genre: "fiction, allegory",
            img: "https://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg",
        },
        {
            title: "The Hobbit", id: 5,
            rate: 4,
            genre: "fantasy, adventure",
            img: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
        },
        {
            title: "Fahrenheit 451", id: 6,
            rate: 4,
            genre: "dystopian, science fiction",
            img: "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg",
        },
    ];

    return (
        <>
            <p id="books">Top Books</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                        />
                        {data.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className ="column">
                <p id="books">All Books</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                            onClick={() => alert("item id = " + item.id)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
                <div className="column">
                <p id="books">All Books</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                            onClick={() => alert("item id = " + item.id)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
            </div>
        </>
    );
}