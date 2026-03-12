import PyPDF2

def extract_text(pdf_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text

if __name__ == "__main__":
    pdf_path = r"c:\Users\josep\Music\work_L3\New notes of JS.pdf"
    content = extract_text(pdf_path)
    with open("js_notes_extracted.txt", "w", encoding="utf-8") as f:
        f.write(content)
    print("Content extracted successfully to js_notes_extracted.txt")
