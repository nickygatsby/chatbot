import openai

# Set your OpenAI API key here
openai.api_key = "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"

def chatbot(prompt):
    response = openai.Completion.create(
        engine="davinci",  # You can choose a different engine based on your requirements
        prompt=prompt,
        max_tokens=50  # Adjust the response length as needed
    )
    return response.choices[0].text.strip()

def main():
    print("Chatbot: Hello! I'm a chatbot. What can I help you with today?")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "exit":
            print("Chatbot: Goodbye!")
            break
        response = chatbot(user_input)
        print(f"Chatbot: {response}")

if __name__ == "__main__":
    main()
