import os
import re

tools_dir = r"c:\projects\alvion-next\src\app\financial-tools"

# we only replace e.target.value with Number(e.target.value) for number states.
# since setCalcType is string, we skip it.
# we use a regex to replace: onChange={(e) => setXYZ(e.target.value)} -> onChange={(e) => setXYZ(Number(e.target.value))}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all setter names that are called with e.target.value
    # e.g., setYears(e.target.value)
    
    # We will exclude setCalcType explicitly
    def replacer(match):
        setter = match.group(1)
        if setter == "setCalcType":
            return match.group(0) # don't touch
        return f"{setter}(Number(e.target.value))"

    # Regex looks for setX(e.target.value)
    new_content = re.sub(r'(set[A-Za-z0-9_]+)\(e\.target\.value\)', replacer, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed {filepath}")

for root, _, files in os.walk(tools_dir):
    for file in files:
        if file.endswith(".tsx"):
            process_file(os.path.join(root, file))

print("Done")
