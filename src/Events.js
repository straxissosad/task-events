/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.append(button);
    const buttonToDelete = document.getElementsByTagName('button')[0];
    buttonToDelete.addEventListener(
        'click',
        () => buttonToDelete.parentElement.removeChild(buttonToDelete),
        true,
    );
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let newUl = document.createElement('ul');
    document.body.append(newUl);
    let list = document.getElementsByTagName('ul')[0];

    for (let i = 0; i < arr.length; i++) {
        let newLi = document.createElement('li');
        newLi.textContent = arr[i];
        list.append(newLi);
    }
    for (let i = 0; i < arr.length; i++) {
        let el = document.getElementsByTagName('li')[i];
        el.addEventListener('mouseover', function () {
            let index = this.textContent;
            this.setAttribute('title', index);
        });
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let newLink = document.createElement('a');
    newLink.textContent = 'tensor';
    newLink.setAttribute('href', 'https://tensor.ru/');
    document.body.append(newLink);
    let refLink = document.getElementsByTagName('a')[0];
    refLink.addEventListener(
        'click',
        () => (refLink.textContent = 'tensor https://tensor.ru/'),
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let newUl = document.createElement('ul');
    let newLi = document.createElement('li');
    newLi.textContent = 'Пункт';
    let newButton = document.createElement('button');
    newButton.textContent = 'Добавить пункт';
    newUl.append(newLi);
    document.body.append(newUl);
    document.body.append(newButton);
    let newLink = document.getElementsByTagName('li');
    let knopka = document.getElementsByTagName('button')[0];
    newLink[0].addEventListener(
        'click',
        () => (newLink[0].textContent = 'Пункт!'),
    );
    knopka.addEventListener('click', function () {
        let spisok = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        li.textContent = 'Пункт';
        spisok.append(li);
        newLink[1].addEventListener(
            'click',
            () => (newLink[1].textContent = 'Пункт!'),
        );
    });
}
