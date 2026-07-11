import Layout from '../components/layout'
export default function Gallery(){
  return (
    <Layout>
      <h1>Gallery</h1>
      <div className="grid grid-cols-2 gap-4">
        {[1,2,3,4,5,6].map(i=> (
          <img key={i} src={`/gallery${i}.jpg`} />
        ))}
      </div>
    </Layout>
  )
}