// npm run generateComponent --component=Name
const fs = require("fs");
const path = require("path");
const colors = require("colors/safe");

const name = process.env.npm_config_component || "MyNewComponent";
const customPath = process.env.npm_config_path || "./resources/js/componentsGenerated";
const customPathVue = process.env.npm_config_path || "./resources/js/components";

const dirComponents = path.resolve(__dirname, "./" + customPath);
const dirComponentsVue = path.resolve(__dirname, "./" + customPathVue);

const creatingComponent = (name) => {
    console.log(colors.yellow("Creating " + name + " folder ..."));
    fs.mkdirSync(dirComponents + "/" + name);
    console.log(colors.green("Ok ..."));
    console.log(colors.yellow("Creating " + name + ".vue ..."));
    fs.appendFile(dirComponentsVue + "/" + name + ".vue", `<template lang="html" src="../componentsGenerated/${name}.html" ></template>
<script lang="text/javascript" src="../componentsGenerated/${name}.js"></script>
<style lang="scss" src="../componentsGenerated/${name}.scss" ></style>`, function (err) {
        if (err) console.log(colors.red(err))
        console.log(colors.green("Ok ..."))
        console.log(colors.yellow("Creating " + name + ".js ..."))
        fs.appendFile(dirComponents + "/" + name + "/" + name + ".js", `export default {
    name: "${name}",
    data: () => {
        return {}
    }
}`, function (err) {
            if (err) console.log(colors.red(err))
            console.log(colors.green("Ok ..."))
            console.log(colors.yellow("Creating " + name + ".html ..."))
            fs.appendFile(dirComponents + "/" + name + "/" + name + ".html", `<div id="` + name + `">
    <div class="main-container">
        
    </div>
</div>`, function (err) {
                if (err) console.log(colors.red(err))
                console.log(colors.green("Ok ..."))
                console.log(colors.yellow("Creating " + name + ".scss ..."))
                fs.appendFile(dirComponents + "/" + name + "/" + name + ".scss", `@import "@/scss/_vars.scss";
#` + name + ` {
}
`, function (err) {
                    if (err) console.log(colors.red(err))
                    console.log(colors.green("Ok ..."))
                    console.log(colors.rainbow("Finish generate " + name + " Component"));
                })
            })
        })
    })
}

if (!fs.existsSync(dirComponents)) {
    console.log(colors.red("Components folder does not exist, creating it"))
    fs.mkdirSync(dirComponents)
    creatingComponent(name, dirComponents)
} else {
    if (!fs.existsSync(dirComponents + "/" + name)) {
        creatingComponent(name, dirComponents)
    } else {
        console.log(colors.red(name + " already exist..."))
    }
}