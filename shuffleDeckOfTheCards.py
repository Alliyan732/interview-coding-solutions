import itertools, random

# this deck would be an object, so we will pass it to a list
deck = list(itertools.product(range(1,14), ["Spades", "Diamonds", "Hearts", "Clubs"]))
random.shuffle(deck)

for i in range(52):
    # print(deck[i])
    print(deck[i][0], "of", deck[i][1] )