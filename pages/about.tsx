import { ReactElement } from "react";
import IndexLayout from "../layouts/IndexLayout";
import { NextPageWithLayout } from "./_app";

const AboutPage : NextPageWithLayout = () => {
    return (
        <div>About Page</div>
    )
}

AboutPage.getLayout = function getLayout(page : ReactElement) {
    return (
      <IndexLayout>{page}</IndexLayout>
    )
  }
export default AboutPage