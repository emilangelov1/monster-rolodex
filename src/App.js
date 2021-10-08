import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
    // mounted: false,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ mounted: true });
    // }, 5000);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.mounted == true && this.state.mounted != prevState.mounted) {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((users) => this.setState({ monsters: users }));
  //   }
  // }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    // if (!this.state.mounted) {
    //   return <div>is not mounted</div>;
    // }

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          handleClear={() => {
            this.setState({ searchField: "" });
          }}
          value={this.state.searchField}
          handleChange={async (e) => {
            await this.setState({ searchField: e.target.value });
            console.log(this.state.searchField);
          }}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
