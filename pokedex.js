document.getElementById("form").addEventListener("submit", getapi);


async function getapi(e) {
  e.preventDefault();
  const pokename = document.getElementById("pokeinpt").value;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokename}/`
  );

  const userpoke = await response.json();

  console.log(userpoke);

  const ability1 = userpoke.abilities[0].ability.name;
  const iconfetch = userpoke.sprites.front_default;
  const height = userpoke.height;
  const weight = userpoke.weight;
  const type0 = userpoke.types[0].type.name;
  console.log(ability1);
  document.querySelector(".abilities").innerHTML = "ABILITY : " + ability1;
  document.querySelector(".height").innerHTML = "HEIGHT : " + height;
  document.querySelector(".weight").innerHTML = "WEIGHT : " + weight;
  document.querySelector(".type").innerHTML = "TYPE : " + type0;
  document.getElementById("pokeicon").src = iconfetch;
  document.querySelector(".name").innerHTML = "NAME : " + pokename;

}








