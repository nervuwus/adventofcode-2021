increase: int = 1

with open("input.txt", 'r') as f:
    data = f.read().split()
    for i in range(0, len(data)):
        if data[i] > data[i-1] and i-1 != -1:
            increase +=1
    f.close()
print(increase)

