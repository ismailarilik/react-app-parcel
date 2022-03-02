import { getAngularVersion } from "@net-piworks/angular-app-parcel";
import { getAngularjsVersion } from "@net-piworks/angularjs-app";

export default function Root(props) {
  return (
    <section>
      <a href="angular2">Angular app {getAngularVersion()}</a> |{" "}
      <a href="angularjs">Angular.js app {getAngularjsVersion()}</a>
    </section>
  );
}
