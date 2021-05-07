import { Book } from "./Book";

export class BookModel {
    totalPage: Number;
    currentPage: Number;
    pageSize: Number;
    totalCount : Number;
    previousPage: Number;
    nextPage: Number;

    books: Book[]
}
