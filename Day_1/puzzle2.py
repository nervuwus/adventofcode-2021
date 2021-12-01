increase: int = 1

int_data: list[int] = []

with open("input.txt", 'r') as f:
    data = f.read().split()
    for l in range(0, len(data)):
        int_data.append(int(data[l]))

    total = [sum(int_data[i:i+3]) for i in range(1, len(int_data))]
    print(total)
    f.close()

for i in range(0, len(total)):
    if total[i] > total[i-1] and total[i] != total[0]:
        increase += 1
print(f"increase of {increase}")
