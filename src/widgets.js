class Widgets {
    constructor() {
        this.loading = true;

        this.handleSearch();
    }

    handleSearch() {
        const searchfield = document.querySelector("input");

        searchfield.oninput = (text) => {
            text.target.value === "" ? this.clearSearchResults() : this.filterSearch(text.target.value);
        };
    }

    filterSearch(searchText) {
        this.clearSearchResults();

        if (!this.loading) {
            const searchLength = searchText.length;
            let players = []
            this.dataset.forEach(player => {
                if (player.name.slice(0, searchLength).toLowerCase() === searchText.toLowerCase()
                    && players.length <= 6 && !players.includes(player.name)) {
                    d3.select(".searchresults")
                        .append("li")
                        .text(player.name)
                    players.push(player.name);
                }
            });
        } 
    }

    loadSearchData(searchText) {
        d3.csv("../dataset/dataset.csv")
            .then((res) => this.dataset = res)
            .then(() => this.loading = false);
    }

    clearSearchResults() {
        d3.selectAll(".searchresults li")
            .remove();
    }
}