# Football

This includes data of football events. The purpose of this project is to replicate a sports page using react and adding components, props, and test.

![image](https://user-images.githubusercontent.com/92696290/146813135-29f4ebb7-d80d-495c-833f-cc4cb114e77d.png)

## Installation Instructions
Commands are given through the terminal in the followig order
* `installation instructions`
* `heroku apps:create football-app-3`
* `git push heroku main`

To install this app, `git clone` the link and `npm start` to start the app. To test aspects of the app, run `npm test`. 

![image](https://user-images.githubusercontent.com/92696290/146815188-319d2a07-f1be-4664-bc6d-820091279feb.png)

The results after running tests on app.



# Football Data

![image](https://user-images.githubusercontent.com/92696290/146623399-918846c3-fbd6-47df-b975-ffa56155855c.png)

![image](https://user-images.githubusercontent.com/92696290/146813468-f3b181ea-fd3f-4f35-b0d2-9cae9d0eb907.png)

![image](https://user-images.githubusercontent.com/92696290/146813490-2646efaf-bb52-44c4-964c-15cb89e04102.png)

# Code Snippets

# Full Front Page Displays (Component)

Provides routing for different javascript files to display onto the front page. 

```js
const displayTopBar = directory.map((item, idx) => {
    return (
        <TopBar key={idx} index={idx} link={item.link} />
    );
})

const displayEvents = events.map((event, idx) => {
    return (
        <Event key={idx} index={idx} title={event.title} />
    );
});

const displayLeftBar = leftBar.map((item, idx) => {
    return (
        <LeftBar key={idx} index={idx} list={item.list} />
    );
});
```
Each section has its own javascript file that will use constructor props to allow the data to be fetched from the main javascript file

```js
class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <a class="navbar-item" href="admin.html" key={this.props.index}>
                    {this.props.link}
                </a>
        )
    }
}
```

## Data example
A code snippet of the data that is being pushed into the front page is an array of object strings.

```js
const events = [
    {
        title: 'Raiders-Browns shifts to Mon.; 2 games on Tues.',
    },
    {
        title: 'Saints coach Payton again tests positive for virus',
    },
    {
        title: 'TE Parham suffered concussion, to leave hospital',
    },
    {
        title: 'Pats RB Harris out vs. Colts with hamstring injury',
    },
    {
        title: 'Harbaugh: Lamar may play, but still no practice',
    },
    {
        title: "Packers Rodgers not practicing but 'ready to go'",
    },
    {
        title: 'Sportsbooks scramble as COVID alters NFL lines',
    },
    {
        title: 'Arians: Decision on suspensions not "distacting"',
    },
];
```

## Tests

A code snippet of one of the tests that is being ran.

```js
test('renders logo', () => {
  render(<App />);
  const logoElement = screen.getByTitle(/logo/i);
  expect(logoElement).toBeInTheDocument();
});
```