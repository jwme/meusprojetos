let ajax = new XMLHttpRequest();

function chamarProdutos() {
    ajax.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
        }
    };
    ajax.open("GET", "json/produtos.json", true);
    ajax.send();
}