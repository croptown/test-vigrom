export default {
  getAbout() {
    let data = {
      title: 'О нас',
      text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra tincidunt justo, a ultricies nibh placerat in. Proin cursus lectus nec nunc hendrerit, non pharetra lectus bibendum. Maecenas orci mi, vestibulum eget faucibus eget, sagittis dictum quam. Suspendisse et vehicula nibh. Nullam id mi a ante fringilla auctor ut in libero. Maecenas vehicula porttitor ipsum eget consequat. Donec eget laoreet magna. Integer molestie velit vitae porta maximus. In sit amet risus velit. Aliquam iaculis ante mattis, lobortis lectus sed, bibendum erat.Vivamus pellentesque nisl urna, eu pellentesque risus tempor vitae. Mauris magna libero, auctor et augue sed, bibendum ornare velit. Vestibulum imperdiet leo nec purus imperdiet maximus. Nullam iaculis quam et metus rhoncus, id faucibus nunc tristique. In nisl est, pretium sed ipsum sed, volutpat dignissim est. Suspendisse potenti. Proin at tempus lorem. Praesent sagittis dolor sed eros accumsan, cursus sodales nisi iaculis. Phasellus venenatis massa eget nunc dictum iaculis. Donec varius augue ipsum, eget fringilla velit semper ac. Pellentesque ut metus non enim ultrices dignissim. Vivamus pharetra et felis in maximus. Aliquam iaculis tempus sem, eget lobortis tellus. Pellentesque ornare cursus viverra. Aenean in libero tincidunt, placerat augue ac, consequat augue. Fusce orci odio, elementum at mattis et, vehicula tempor purus.
Cras volutpat non lacus sed imperdiet. Etiam vestibulum placerat odio ut malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi eu pellentesque est. Vestibulum mollis accumsan dui. Duis elementum purus a ipsum finibus, et tincidunt enim pharetra. Maecenas id sapien venenatis, molestie diam et, vulputate lectus. Duis eget dolor vitae tortor condimentum malesuada. Maecenas mollis tempus odio, facilisis congue purus facilisis a. Curabitur scelerisque ligula elit, ac dapibus augue gravida at. Duis maximus elementum dolor.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus rhoncus, urna consequat facilisis porttitor, turpis tellus ullamcorper felis, quis dapibus orci mauris ac purus. Aliquam sollicitudin quis metus eu ornare. Aliquam erat volutpat. Ut eget tellus eros. Phasellus non nunc nec mi malesuada finibus in a lorem. Duis ex tellus, vestibulum et imperdiet quis, tincidunt sed est. Aenean scelerisque sollicitudin eros ullamcorper blandit. Quisque mollis ornare odio a tristique. Curabitur tincidunt bibendum tristique. Nunc vitae purus pretium nibh facilisis tempor ac ac diam. Maecenas bibendum a ante at feugiat. Nunc elit neque, viverra laoreet risus eu, ullamcorper sagittis tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sodales risus nunc, sed egestas justo auctor et. Etiam viverra accumsan risus, vitae lobortis nisi posuere et.
Maecenas et ultrices nisi. Sed fringilla ante ac fermentum congue. Mauris a molestie metus. Etiam ut vehicula erat. Aenean semper metus vitae nulla condimentum, id lobortis lacus laoreet. Mauris tristique tortor feugiat, fringilla orci nec, egestas diam. Mauris ut eros sed lectus interdum ultrices eget ac urna. Nunc vestibulum vel ex a posuere. In luctus consectetur enim eu aliquet.
      `,
    };
    return data;
  },
  getItems() {
    let data = {
      items: {
        1: {"name":"item1","quantity":"1","price":"20"},
        2: {"name":"item2","quantity":"5","price":"5"},
        3: {"name":"item3","quantity":"3","price":"30"},
      },
      total: 3,
    };
    return data;
  },
}