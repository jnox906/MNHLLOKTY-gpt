https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${AIzaSyDQXzHBKFaRYSAoIBcf6m0_N-s5K8t68So};
async function sendMessage() { const input = document.getElementById("userInput"); const chatBox = document.getElementById("chatBox"); const userText = input.value.trim();
if (!userText) return;
// Show user message chatBox.innerHTML += <div class="message user">${userText}</div>; input.value = ""; chatBox.scrollTop = chatBox.scrollHeight;
// Show loading chatBox.innerHTML += <div class="message bot" id="loading">Thinking...</div>;
try { const response = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contents: [{ parts: [{ text: userText }] }] }) });
const data = await response.json();
const botReply = data.candidates[0].content.parts[0].text;

// Remove loading and show reply
document.getElementById("loading").remove();
chatBox.innerHTML += `<div class="message bot">${botReply}</div>`;
chatBox.scrollTop = chatBox.scrollHeight;
} catch (error) { document.getElementById("loading").remove(); chatBox.innerHTML += <div class="message bot">Something went wrong. Try again.</div>; } }
// Allow pressing Enter to send document.getElementById("userInput").addEventListener("keypress", function(e) { if (e.key === "Enter") sendMessage(); });

