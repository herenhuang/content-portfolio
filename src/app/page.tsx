export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Navigation - Left Column (30%) */}
      <nav className="w-[30%] fixed top-0 left-0 h-screen p-8 border-r border-neutral-200">
        <div className="mb-16 font-mono tracking-tight">HELEN</div>
        
        {/* Project Links */}
        <div className="space-y-1">
          <div className="text-sm font-light">Selected works:</div>
          <table className="w-full mt-6 border-separate border-spacing-y-3">
            <tbody>
              <tr>
                <td className="pr-4 text-sm font-light">2023</td>
                <td className="font-light">
                  <a href="#project1" className="hover:underline">Light recording</a>
                </td>
                <td className="text-right text-sm text-neutral-500">Cyanotypes</td>
              </tr>
              <tr>
                <td className="pr-4 text-sm font-light">2023</td>
                <td className="font-light">
                  <a href="#project2" className="hover:underline">Nature Matter</a>
                </td>
                <td className="text-right text-sm text-neutral-500">Photographs</td>
              </tr>
              <tr>
                <td className="pr-4 text-sm font-light">2022</td>
                <td className="font-light">
                  <a href="#project3" className="hover:underline">Still Life</a>
                </td>
                <td className="text-right text-sm text-neutral-500">3D Scan</td>
              </tr>
              <tr>
                <td className="pr-4 text-sm font-light">2022</td>
                <td className="font-light">
                  <a href="#project4" className="hover:underline">Inner Layers</a>
                </td>
                <td className="text-right text-sm text-neutral-500">Digital</td>
              </tr>
              <tr>
                <td className="pr-4 text-sm font-light">2021</td>
                <td className="font-light">
                  <a href="#project5" className="hover:underline">Turbid fluid</a>
                </td>
                <td className="text-right text-sm text-neutral-500">Spatial</td>
              </tr>
            </tbody>
          </table>
        </div>
      </nav>

      {/* Content - Right Column (70%) */}
      <div className="w-[70%] ml-[30%] min-h-screen">
        <div className="p-8">
          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-16">
            {/* Project 1 */}
            <div id="project1" className="space-y-4">
              <img 
                src="https://source.unsplash.com/random/1200x800?cyanotype" 
                alt="Light recording"
                className="w-full aspect-[3/2] object-cover bg-neutral-100"
              />
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-light">Light recording</h2>
                  <p className="text-sm text-neutral-500">Cyanotypes, 2023</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div id="project2" className="space-y-4">
              <img 
                src="https://source.unsplash.com/random/1200x800?nature" 
                alt="Nature Matter"
                className="w-full aspect-[3/2] object-cover bg-neutral-100"
              />
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-light">Nature Matter</h2>
                  <p className="text-sm text-neutral-500">Photographs, 2023</p>
                </div>
              </div>
            </div>

            {/* Add more projects similarly */}
          </div>
        </div>
      </div>
    </main>
  )
}
