export const books = {
    "0": {
        "name": "NAME",
        "author_id": "0",
        "description": "DESC",
        "img": ["images/books2.jpg", "images/books3.jpg", "images/books4.jpg"]
    },
    "1": {
        "name": "Евгений Онегин",
        "author_id": "1",
        "description": "Произведение охватывает 1819 по 1825 годы – в этот промежуток времени произошли такие значительные события как разгром армии Наполеона Бонапарта и восстание декабристов. Но основная сюжетная линия разворачивается вокруг любовной истории Татьяны Лариной, Евгения Онегина и Владимира Ленского.",
        "img": ["images/eo1.jpg", "images/eo2.jpg", "images/eo3.jpg"]
    },
    "2": {
        "name": "Сказка о царе Салтане",
        "author_id": "1",
        "description": "Сказка рассказывает о женитьбе царя Салтана и появлении на свет его сына по имени Гвидон. Из-за злых проделок родных тетушек могучий богатырь Гвидон Салтанович оказывается на необитаемом острове. Там ему встречается прекрасная и могущественная царевна-Лебедь, которая помогает князю Гвидону воссоединиться с отцом и занять заслуженное место на престоле.",
        "img": ["images/sos1.jpg", "images/sos2.jpeg", "images/sos3.jpg"]
    },
    "3": {
        "name": "Руслан и Людмила",
        "author_id": "1",
        "description": "В данном произведение Пушкину удалось сочетать мистику с любовной историей. Главные герои поэмы проходят через множество трудностей, но в итоге сила любви сокрушает все препятствия.",
        "img": ["images/rl1.jpg", "images/rl2.jpg", "images/rl3.jpg"]
    },
    "4": {
        "name": "Мертвые души",
        "author_id": "2",
        "description": "Гоголь задумал создать поэму и представить её в виде трёхтомного прозаического (по факту) сочинения. Относительно благополучно сложилась судьба только первой книги, которая была издана в 1842 г. Работа над вторым томом была практически завершена, но создатель предпочёл не публиковать результаты своих трудов (по распространённой версии, страницы были сожжены). Процесс написания третьего тома остановился на стадии создания набросков, отдельных записей, где идеи получили лишь частичную формулировку.",
        "img": ["images/md1.jpg", "images/md2.jpg", "images/md3.jpeg"]
    },
    "5": {
        "name": "Вечера на хуторе близ Диканьки",
        "author_id": "2",
        "description": "В 1829-32 годах Гоголь написал серию рассказов, которые вышли на страницах популярных изданий, когда автору исполнилось 22. Идеи для зарисовок, картин крестьянской жизни Гоголь перенял из писем матери. Писатель попросил родительницу описать ему старинные обычаи, придания и суеверия, которыми полнилась украинская земля. Мать выполнила просьбу, а Гоголь получил ценный материал, который переработал в шедевр фольклорной литературы. Книга состоит из двух частей, в каждой — 4 рассказа.",
        "img": ["images/vd1.jpg", "images/vd2.jpg", "images/vd3.jpg"]
    },
    "6": {
        "name": "Преступление и наказание",
        "author_id": "3",
        "description": "Замысел этого социально-психологического и философского романа формировался у Достоевского долгие годы, однако непосредственно к работе он приступил в 1865 г. Уже через год в «Русском вестнике» был напечатан журнальный вариант. Автор объединил два намеченных ранее сюжета – незаконченного романа о семье Мармеладовых и набросков исповеди каторжанина.",
        "img": ["images/pie1.jpg", "images/pie2.jpg", "images/pie3.jpg"]
    },
};

export const authors = {
    "0": {
        "name": "NAME",
        "description": "DESC",
        "books": ["0"],
        "portrait": "images/ava.png"
    },
    "1": {
        "name": "Пушкин А.С.",
        "description": "Один из самых авторитетных литературных деятелей первой трети XIX века. Ещё при жизни Пушкина сложилась его репутация величайшего национального русского поэта. Пушкин рассматривается как основоположник современного русского литературного языка.",
        "books": ["1", "2", "3"],
        "portrait": "images/pushkin.jpg"
    },
    "2": {
        "name": "Гоголь В.Н.",
        "description": "По мнению В. Белинского и Н. Чернышевского, Гоголь стал основателем литературного направления — основного этапа «натуральной школы» 1840-х годов; современные исследователи считают, что он оказал большое влияние на русскую и мировую литературу. Влияние Гоголя на своё творчество признавали Михаил Булгаков, Фёдор Достоевский, Рюноскэ Акутагава, Фланнери О’Коннор, Франц Кафка и многие другие.",
        "books": ["4", "5"],
        "portrait": "images/gogol.jpg"
    },
    "3": {
        "name": "Достоевский Ф.М.",
        "description": "Классик мировой литературы, по данным ЮНЕСКО, один из самых читаемых писателей в мире. Собрание сочинений Достоевского состоит из 12 романов, четырёх новелл, 16 рассказов и множества других произведений.",
        "books": ["6"],
        "portrait": "images/dostoevski.webp"
    },
};
