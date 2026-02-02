// 입력상자와 버튼에 접근

let book = document.querySelector('#book');
let addBtn = document.querySelector('#add');
let bookList = document.querySelector('#bookList');
// 도서 목록 저장 배열 생성
let books = [];

// 추가 버튼에 클릭 이벤트 연결
addBtn.addEventListener('click', addBook)


// 배열에 도서 목록 추가
document.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    e.preventDefault();
    addBook();
  }
}, true)

// document.addEventListener('keypress', function(event) {
//   if(event.key === 'Enter') {
//     event.preventDefault();
//     addBook();
//   }
// }, true)


function addBook(){
  let bookData = book.value;
  if(bookData === "" ) {
    alert("책 제목을 입력해주세요")
  } else if(books.indexOf(bookData)== -1){
    books.push(bookData);
  }else {
    alert("중복된 책 제목입니다")
  }
  book.value = "";
  book.focus();
  showFunc();
}
// 노드 생성

  function showFunc() {

    let nodeul = document.createElement('ul');
    for(let idx in books ) {
      let nodeli = document.createElement('li');
      let nodebook = document.createTextNode(books[idx]);
      
      let nodesp = document.createElement('span');
      let textdel = document.createTextNode('삭제');
      
      nodeul.appendChild(nodeli);
      
      nodeli.appendChild(nodebook);
      nodeli.appendChild(nodesp);
      
      nodesp.appendChild(textdel);
      nodesp.setAttribute('class', 'del');
      nodesp.setAttribute('id', `${idx}`);
    }
    bookList.innerHTML= '';
    bookList.appendChild(nodeul);

    console.log(books);
    let delList = document.querySelectorAll('.del') 
    for (let ele of delList) {
      ele.addEventListener('click',delFunc);
    }
  }

  function delFunc() {
    let delNum = this.getAttribute('id');
    books.splice(delNum,1);
    showFunc()
  }



// 문서에 도서목록 출력(<ul><li>)




// 문서에 도서 목록 삭제


