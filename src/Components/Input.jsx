export function Input({ count, setCount }) {
  let answer = "sim";

  function updateAnswer() {
    setCount(count + 1);
  }

  function validate(formData) {
    const query = formData.get("query");
    if (query == answer) {
      updateAnswer();
    }
  }

  switch (count) {
    case 0:
      answer = "gabi";
      break;
    case 1:
      answer = "lu";
      break;
    case 2:
      answer = "rafa";
      break;
    case 3:
      answer = "ju";
      break;
  }

  return (
    <form action={validate}>
      <input name="query" />
      <button type="submit">enviar</button>
    </form>
  );
}
