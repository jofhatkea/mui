import React, { Component } from "react";
import Appbar from "muicss/lib/react/appbar";
import Button from "muicss/lib/react/button";
import Panel from "muicss/lib/react/panel";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import Container from "muicss/lib/react/container";
import Skeleton from "react-loading-skeleton";

class App extends Component {
  state = {
    posts: [{}, {}]
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        posts: [
          {
            title: "hi mom",
            body: "<h1>this is stuff</h1>"
          },
          {
            title: "hi mom",
            body: "this is my body"
          },
          {
            title: "hi mom",
            body: "this is my body"
          },
          {
            title: "hi mom",
            body: "this is my body"
          },
          {
            title: "hi mom",
            body: "this is my body"
          },
          {
            title: "hi mom",
            body: "this is my body"
          }
        ]
      });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <Appbar>
          <Button color="accent">button</Button>
        </Appbar>
        <Panel>
          <Form>
            <legend>Title</legend>
            <Input placeholder="Input 1" />
            <Input placeholder="Input 2" />
            <Textarea placeholder="Textarea" />
            <Button variant="raised">Submit</Button>
          </Form>
        </Panel>
        <Container>
          <div className="panels">
            {this.state.posts.map(p => (
              <Blogpost {...p} />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

class Blogpost extends Component {
  render() {
    return (
      <Panel>
        <div style={{ fontSize: 20, lineHeight: 2 }}>
          <h1>{this.props.title || <Skeleton />}</h1>
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.body || <Skeleton count={2} />}
        </div>
      </Panel>
    );
  }
}

export default App;
