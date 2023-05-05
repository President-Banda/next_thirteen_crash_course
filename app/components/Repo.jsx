import React from 'react'
async function fetchRepo(name) {
  const response =  await fetch(`https://api.github.com/repos/${name}`);

  const repo = await response.json();
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name);
  return (
    <div>Repo</div>
  )
}

export default Repo