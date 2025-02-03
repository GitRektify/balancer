import { AMMs } from "./component/AMMs";
import PageFooter from "./component/footer";
import { NavBar } from "./component/NavBar";

export default function Home() {
  return (
    <div >
      <NavBar>
        
      </NavBar>
      <AMMs/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <PageFooter>

        </PageFooter>
      </footer>
    </div>
  )
}
