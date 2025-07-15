import fetchMock from "jest-fetch-mock";
import { ApiResponse } from "@/utils/endpoint";
import { fetchGames } from "@/services/game-service";

const dummyGames = [
  {
    id: "1",
    genre: "RPG",
    image: "game.jpg",
    name: "Test Game",
    description: "This is a test game",
    price: 50,
    isNew: true,
  },
  {
    id: "2",
    genre: "action",
    image: "game.jpg",
    name: "Test Game 2",
    description: "This is a test game 2",
    price: 75,
    isNew: false,
  },
  {
    id: "3",
    genre: "horror",
    image: "game.jpg",
    name: "Test Game 3",
    description: "This is a test game 3",
    price: 20,
    isNew: false,
  },
  {
    id: "4",
    genre: "action",
    image: "game.jpg",
    name: "Test Game 4",
    description: "This is a test game 4",
    price: 20,
    isNew: false,
  },
];

fetchMock.enableMocks();

beforeAll(() => {
  process.env.NEXT_PUBLIC_API_URL = "http://localhost:3000/api/games";
});

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("fetchGames function", () => {
  it("should fetch all games in page 1 without filtering by genre", async () => {
    const mockResponse: ApiResponse = {
      games: dummyGames,
      availableFilters: [],
      totalPages: 1,

      currentPage: 1,
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const genre = null;
    const page = 1;

    const result = await fetchGames(genre, page);

    expect(result).toEqual(mockResponse);
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3000/api/games?page=1");
  });

  it("should fetch games filtering by genre", async () => {
    const page = 1;
    const genre = "action";
    const filteredGames = dummyGames.filter((game) => game.genre === genre);

    const mockResponse: ApiResponse = {
      games: filteredGames,
      availableFilters: [],
      totalPages: 1,
      currentPage: 1,
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await fetchGames(genre, page);

    console.log();

    expect(result).toEqual(mockResponse);
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3000/api/games?genre=action&page=1");
  });

  it("should throw an error if the fetch fails", async () => {
    fetchMock.mockRejectOnce(new Error("Network error"));

    await expect(fetchGames("RPG", 1)).rejects.toThrow("Failed to fetch games: Network error");
  });
});
