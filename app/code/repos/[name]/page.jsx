import Repo from "@/app/components/Repo"
import Link from "next/link"

const RepoPage = ({ params :{ name } }) => {
    // console.log(params)
  return (
    <div className='card'>
        <Link href='/code/repos' >
          Back to Repositories
        </Link>
        <Repo name={name} />
    </div>
  )
}

export default RepoPage