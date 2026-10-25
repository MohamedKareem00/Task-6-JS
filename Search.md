1. DOM Selectors
   Definition
   DOM Selectors are methods used in JavaScript to select and access HTML elements within the Document Object Model (DOM). They allow developers to manipulate element content, attributes, styles, and behavior.

Common DOM Selectors
Method Description Return Value
getElementById() Selects an element by its ID. One element or null
getElementsByClassName() Selects elements by class name. Live HTMLCollection
getElementsByTagName() Selects elements by tag name. Live HTMLCollection
querySelector() Selects the first element matching a CSS selector. One element or null
querySelectorAll() Selects all elements matching a CSS selector. Static NodeList

<h1 id="title">Hello World</h1>
<p class="text">First paragraph</p>
<p class="text">Second paragraph</p>

const title = document.getElementById("title");
const firstText = document.querySelector(".text");
const allTexts = document.querySelectorAll(".text");

console.log(title);
console.log(firstText);
console.log(allTexts);

Explanation: getElementById() selects the heading, querySelector() selects the first paragraph, and querySelectorAll() selects both paragraphs.

Source:https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors?utm_source=chatgpt.com

---

2. NodeList vs HTMLCollection
   Definition
   NodeList and HTMLCollection are array-like objects used to represent groups of DOM nodes or HTML elements. However, they differ in their behavior and the types of nodes they can contain.

Main Differences
Feature NodeList HTMLCollection
Contents Can contain different node types Contains HTML elements only
Common method querySelectorAll() getElementsByClassName()
Behavior Can be static or live Live
forEach() Available on modern NodeList objects Not directly available
Array methods Not all array methods are available Not all array methods are available

Example

<p class="text">First</p>
<p class="text">Second</p>

const nodeList = document.querySelectorAll(".text");
const htmlCollection = document.getElementsByClassName("text");

console.log(nodeList);
console.log(htmlCollection);

const staticList = document.querySelectorAll(".text");
const liveCollection = document.getElementsByClassName("text");

const newParagraph = document.createElement("p");
newParagraph.className = "text";
document.body.appendChild(newParagraph);

console.log(staticList.length); // 2
console.log(liveCollection.length); // 3

Explanation: The NodeList returned by querySelectorAll() remains unchanged after adding the new paragraph, while the HTMLCollection updates automatically.

Source:https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection?utm_source=chatgpt.com

---

3. removeAttribute()
   Definition
   The removeAttribute() method removes a specified attribute from an HTML element. If the attribute does not exist, the method does nothing.

Syntax
element.removeAttribute(attributeName);

element: The HTML element to modify.

attributeName: The name of the attribute to remove.

Return value: undefined.

Example 1: Removing an Attribut
<input id="username" type="text" disabled>

const input = document.getElementById("username");
input.removeAttribute("disabled");

Explanation: The disabled attribute is removed, allowing the user to interact with the input.
Example 2: Removing a Class Attribute

<p id="message" class="active">Hello World</p>

const message = document.getElementById("message");
message.removeAttribute("class");

Explanation: The entire class attribute is removed from the paragraph, including the value active.

Important: removeAttribute("class") removes the whole class attribute, whereas classList.remove("active") removes only the specified class.

Source:https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute?utm_source=chatgpt.com

الخلاصه

1. DOM Selectors

طرق بنستخدمها عشان نختار عناصر HTML ونتعامل معاها باستخدام JavaScript. أهمها getElementById() وquerySelector() وquerySelectorAll().

2. NodeList vs HTMLCollection

الاتنين بيجمعوا عناصر من الـ DOM، لكن querySelectorAll() بيرجع NodeList ثابتة لا تتحدث تلقائيًا، بينما getElementsByClassName() بيرجع HTMLCollection حية بتتحدث عند تغيير عناصر الصفحة.

3. removeAttribute()

بتشيل Attribute من عنصر HTML، زي disabled أو class أو id. ولو الـ Attribute مش موجود، مش بيحصل أي تغيير.
