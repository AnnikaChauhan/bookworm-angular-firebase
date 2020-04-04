export interface IBook {
    author: string,
    pages: number,
    picture: string,
    title: string
}

export const books: IBook [] = [
    {
        author: "Margaret Atwood",
        pages: 242,
        picture: "https://firebasestorage.googleapis.com/v0/b/bookworm-d93e4.appspot.com/o/handmaids.jpg?alt=media&token=79bb2f93-5765-4b59-9a3b-36678d10623f",
        title: "The Handmaid's Tale"
    },
    {
        author: "Gail Honeyman",
        pages: 350,
        picture: "https://firebasestorage.googleapis.com/v0/b/bookworm-d93e4.appspot.com/o/eleanorOliphant.jpg?alt=media&token=af9c834d-f267-4862-9d87-d5a3e08c0d6e",
        title: "Eleanor Oliphant is Completely Fine"
    },
    {
        author: "George RR Martin",
        pages: 818,
        picture: "https://firebasestorage.googleapis.com/v0/b/bookworm-d93e4.appspot.com/o/gameOfThrones.jpg?alt=media&token=bfd6240f-ec8d-455e-b508-92081d64c96c",
        title: "A Game Of Thrones"
    },
    {
        author: "Dan Brown",
        pages: 431,
        picture: "https://firebasestorage.googleapis.com/v0/b/bookworm-d93e4.appspot.com/o/daVinciCode.jpg?alt=media&token=22aeefe1-cce6-4868-a72f-d20d63b16581",
        title: "The Da Vinci Code"
    },
    {
        author: "Leo Tolstoy",
        pages: 1000,
        picture: "https://firebasestorage.googleapis.com/v0/b/bookworm-d93e4.appspot.com/o/warPeace.jpeg?alt=media&token=aa303a2b-ccb2-4caf-bc1a-0b350e30ff57",
        title: "War & Peace"
    },
    {
        author: "Yuval Noah Harari",
        pages: 382,
        picture: "https://firebasestorage.googleapis.com/v0/b/bookworm-d93e4.appspot.com/o/sapiens.jpg?alt=media&token=004b2e6e-1341-4a34-8c15-d6aa27088b1b",
        title: "Sapiens"
    }
]