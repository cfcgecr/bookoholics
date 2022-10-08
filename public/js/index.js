async function fetchbook() {
  const response = await fetch("books.json");
  const books = await response.json();
  console.log(books);

  books.jee.map((book) => {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    const img = document.createElement("img");

    img.src = book.img;
    img.alt = book.bookname;
    div3.innerText = book.bookname;
    span1.className = "prev-price";
    span1.innerHTML = `&#8377 ${book.prevprice}`;
    span2.innerText = "|";
    span3.innerHTML = `&#8377 ${book.newprice}`;

    div1.className = "jeebookcard";
    div2.className = "card";
    div3.className = "bookname";
    div4.className = "price";

    div1.appendChild(div2);
    div4.append(span1, span2, span3);
    div2.append(img, div3, div4);
    const container = document
      .getElementsByClassName("jee")[0]
      .appendChild(div1);
  });
  books.neet.map((book) => {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    const img = document.createElement("img");

    img.src = book.img;
    img.alt = book.bookname;
    div3.innerText = book.bookname;
    span1.className = "prev-price";
    span1.innerHTML = `&#8377 ${book.prevprice}`;
    span2.innerText = "|";
    span3.innerHTML = `&#8377 ${book.newprice}`;

    div1.className = "jeebookcard";
    div2.className = "card";
    div3.className = "bookname";
    div4.className = "price";

    div1.appendChild(div2);
    div4.append(span1, span2, span3);
    div2.append(img, div3, div4);
    const container = document
      .getElementsByClassName("neet")[0]
      .appendChild(div1);
  });
}
fetchbook();
