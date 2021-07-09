// import { BlogPost } from "./tarea/Tarea1.js";

// ReactDOM.render(<Tarjeta nombre="Adriano" titulo="Front End Developer" imagen="https://avatars.githubusercontent.com/u/73238164?v=4" />, document.getElementById('react-app'));

// ReactDOM.render(
//   <BlogPost parrafos="Hoy vi una ardilla.
//      /nLa ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
//      /nCreo que puede haber sido un perro, dado que en Argentina no hay ardillas."
//     autor={{
//       nombre: "Adriano",
//       titulo: "Front End Developer",
//       imagen: "https://avatars.githubusercontent.com/u/73238164?v=4",
//     }}
//   />,
//   document.getElementById("react-app")
// );

// import { MatchNombre } from './tarea/Tarea2.js';

// ReactDOM.render(
//   <MatchNombre />, document.getElementById('react-app')
// );

// import { PasswordInput } from './tarea/tarea2.js';

// ReactDOM.render(
//   <PasswordInput minLength={10} />, document.getElementById('react-app')
// );

// import { ValidationInput } from './tarea/tarea2.js';

// ReactDOM.render(
//   <ValidationInput isPassword={true} validation = {(value) => value.length >= 8} />, document.getElementById('react-app')
// );

// import { UncontrolledCheckbox } from "./tarea/tarea3.js";

// ReactDOM.render(
//   <UncontrolledCheckbox name={"checkbox"} initialValue={false} />,
//   document.getElementById("react-app")
// );

// import { CheckboxList } from "./tarea/tarea3.js";

// ReactDOM.render(
//   <CheckboxList items={{ uno: false, dos: true, tres: false }} />,
//   document.getElementById("react-app")
// );

import { CheckboxListWithState } from "./tarea/tarea4.js";

ReactDOM.render(
  <CheckboxListWithState items={{ uno: false, dos: true, tres: false }} />,
  document.getElementById("react-app")
);
