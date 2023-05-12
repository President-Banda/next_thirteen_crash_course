async function fetchRepoContents(name){
    await new Promise((resolve) => setTimeout( resolve, 3000));
    const response = await fetch(
        `https://api.github.com/repos/president-banda/${name}/contents`
    );

    const contents = await response.json();
    return contents;
}

const RepoDirs = async ({ name }) => {

    const contents = await fetchRepoContents(name);

    const dirs = contents.filter((content)=> content.type === 'dir')

  return (
    <div>RepoDirs</div>
  )
}

export default RepoDirs