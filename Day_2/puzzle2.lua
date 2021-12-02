local open = io.open

local values = {}
local direction = {}

local calculate_direction = {}

calculate_direction["forward"] = 0
calculate_direction["depth"] = 0
calculate_direction["aim"] = 0

local function read_file(path)
    local file = open(path, "rb")
    if not file then
        return nil
    end
    local content = file:read("*a")
    file:close()
    return content
end

local function calculation( dir, distance )
        if dir == "forward" then
            calculate_direction["forward"] = calculate_direction["forward"] + distance
            print(calculate_direction["forward"])
            calculate_direction["depth"] = calculate_direction["depth"] + (calculate_direction["aim"] * distance)
            print(calculate_direction["depth"])
        elseif dir == "down" then
            calculate_direction["aim"] = calculate_direction["aim"] + distance
            print(calculate_direction["aim"])
        elseif dir == "up" then
            calculate_direction["aim"] = calculate_direction["aim"] - distance
            print(calculate_direction["aim"])
        end
    end


local filecontent = read_file("input.txt")

for token in string.gmatch(filecontent, "[^%s]+") do
    if tonumber(token) ~= nil then
        table.insert(values, tonumber(token))
    elseif tonumber(token) == nil then
        table.insert(direction, token)
    end
end

for i = 1, #values do
    --print("direction: ", direction[i])
    --print("distance: ", values[i])
    calculation(direction[i], values[i])
end

print("forward value: ", calculate_direction["forward"])
print("depth value: ", calculate_direction["depth"])
print("total: ", calculate_direction["forward"] * calculate_direction["depth"])
