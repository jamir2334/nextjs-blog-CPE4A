import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
<p><b>Contact Information:</b></p>

      <p><Link href="https://www.facebook.com/jamir2334/">Facebook Page</Link></p>

      <p><b>Description:</b></p>

      <p>To acquire knowledge and experiences of the real working field and to utilized the skills I learned.  </p>

      <p><b>Skills:</b></p>

      <li>Knowledgeable in C++, Python, and JavaScript programming languages.</li>
      <li>Oriented in HTML5, PHP, CSS and MySQL database.</li>
      <li>Capable of editing videos. </li>

      <p><b>Educational Attainment:</b></p>
      <div>
        <p style={{textAlign: "left"}}><b>Tertiary</b></p>
        <p style={{textAlign: "center"}}>
        Bachelor of Science in Computer Engineering (Degree)
        </p>
        <p style={{textAlign: "center"}}>
        University of the Assumption Unisite Subdivision,
        </p>
        <p style={{textAlign: "center"}}>
        Barangay Del Pilar, City of San Fernando Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2019-present
        </p>
      </div>

      <div>
        <p style={{textAlign: "left"}}><b>Secondary</b></p>
        <p style={{textAlign: "center"}}>
        AMA Computer College San Fernando
        </p>
        <p style={{textAlign: "center"}}>
        264 B. Mendoza, San Fernando, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2017-2019 (Senior High School)
        </p><br></br>
        <p style={{textAlign: "center"}}>
        Sto. Rosario National High School 
        </p>
        <p style={{textAlign: "center"}}>
        XPRV+568, Sto. Rosario, Minalin, Pampanga 
        </p>
        <p style={{textAlign: "center"}}>
        2013-2017 (Junior High School)
        </p>
      </div>

        <div>
        <p style={{textAlign: "left"}}><b>Primary</b></p>
        <p style={{textAlign: "center"}}>
        Matinian School, Inc.
        </p>
        <p style={{textAlign: "center"}}>
        107 Municipal Rd, Santo Tomas, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2006-2013
        </p>
      </div>



        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}