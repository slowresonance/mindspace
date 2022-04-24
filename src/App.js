import Block from "./compenents/Block";
import "./styles/styles.css";

function App() {
  return (
    <>
      <header>
        <span id="name">Mohan's</span> Mindspace
      </header>
      <main>
        {sections.map((section) => (
          <section>
            {section.map((block) => (
              <Block
                title={block.title}
                type={block.type}
                subtitle={block.subtitle}
                collapsible={block.collapsible}
                contents={block.contents}
              ></Block>
            ))}
          </section>
        ))}
      </main>
    </>
  );
}

let sections = [
  [
    {
      title: "WT Lab",
      type: "list",
      subtitle: "+ Add a link",
      collapsible: true,
      contents: [
        {
          title: "Form Validation",
          link: "https://pastebin.com/yEEDwe3w",
          subtitle: "yEEdWe3w",
        },
        {
          title: "Book Publisher Layout",
          link: "https://pastebin.com/CUFJYuwu",
          subtitle: "CUFJYuwu",
        },
      ],
    },
    {
      title: "Files",
      type: "list",
      subtitle: "+ Upload a file",
      collapsible: true,
      contents: [
        {
          title: "project-bonfire-resurrect.txt",
          link: "https://pastebin.com/yEEDwe3w",
          subtitle: "23.04.22",
        },
        {
          title: "eisen-backup-23-04-22.json",
          link: "https://pastebin.com/CUFJYuwu",
          subtitle: "21.04.22",
        },
      ],
    },
    {
      title: "Todos",
      type: "todos",
      subtitle: "+ Add a todo",
      collapsible: true,
      contents: [
        {
          title: "Make a theme maker for 100r",
          done: "false",
          date: "23.04.22",
        },
        {
          title: "Make a platform for creating web rings",
          done: "false",
          subtitle: "21.04.22",
        },
        {
          title: "Save and restore tabs",
          done: "false",
          subtitle: "21.04.22",
        },
      ],
    },
  ],
  [
    {
      title: "Todos",
      type: "todos",
      subtitle: "+ Add a todo",
      collapsible: true,
      contents: [
        {
          title: "Make a theme maker for 100r",
          done: "false",
          date: "23.04.22",
        },
        {
          title: "Make a platform for creating web rings",
          done: "false",
          subtitle: "21.04.22",
        },
        {
          title: "Save and restore tabs",
          done: "false",
          subtitle: "21.04.22",
        },
      ],
    },
  ],
  [
    {
      title: "Todos",
      type: "todos",
      subtitle: "+ Add a todo",
      collapsible: true,
      contents: [
        {
          title: "Make a theme maker for 100r",
          done: "false",
          date: "23.04.22",
        },
        {
          title: "Make a platform for creating web rings",
          done: "false",
          subtitle: "21.04.22",
        },
        {
          title: "Save and restore tabs",
          done: "false",
          subtitle: "21.04.22",
        },
      ],
    },
  ],
  [
    {
      title: "Notes",
      type: "notes",
      collapsible: false,
      contents: {
        placeholder: "Got something on your mind?",
      },
    },
  ],
];

export default App;
